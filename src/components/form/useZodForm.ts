import {z, ZodError} from 'zod';
import {useReducer} from 'react';

type FormState<T> = {
  data: T;
  errors: Partial<Record<keyof T, string>>;
};

type Action<T> =
  | {type: 'SET_FIELD'; field: keyof T; value: any}
  | {type: 'SET_ERRORS'; errors: Partial<Record<keyof T, string>>};

function formReducer<T>(state: FormState<T>, action: Action<T>): FormState<T> {
  switch (action.type) {
    case 'SET_FIELD':
      return {...state, data: {...state.data, [action.field]: action.value}};
    case 'SET_ERRORS':
      return {...state, errors: action.errors};
    default:
      return state;
  }
}

export function useZodForm<T>(initialData: T, schema: z.Schema<T>) {
  const [state, dispatch] = useReducer(formReducer<T>, {
    data: initialData,
    errors: {},
  });

  const setField = (field: keyof T, value: any) => {
    dispatch({type: 'SET_FIELD', field, value});
  };

  const validate = (): boolean => {
    try {
      schema.parse(state.data);
      dispatch({type: 'SET_ERRORS', errors: {}});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMap: Record<string, string> = {};

        for (const [field, fieldErrors] of Object.entries(
          error.formErrors.fieldErrors,
        )) {
          if (fieldErrors) {
            errorMap[field] = fieldErrors.join(', ');
          }
        }

        dispatch({
          type: 'SET_ERRORS',
          errors: errorMap as Partial<Record<keyof T, string>>,
        });
      }
      return false;
    }
  };

  return {data: state.data, errors: state.errors, setField, validate};
}
