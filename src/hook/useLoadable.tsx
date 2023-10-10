/**
 * Créez un hook personnalisé pour le chargement dynamique des composants.
 *
 * @param importFunc Une fonction qui renvoie une promesse de composant dynamique.
 * @param fallback Le composant de repli à afficher pendant le chargement.
 * @returns Un composant chargé dynamiquement.
 *
 * @example
 * Utilisation du hook dans un composant :
 * ```jsx
 * const MyDynamicComponent = useLoadable(() => import('./MyDynamicComponent'));
 * ```
 */
 import React, { lazy, Suspense, ComponentType } from 'react';


type ComponentProps<T extends ComponentType<any>> = React.ComponentProps<T>;

const useLoadable = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback: React.ReactNode | null = null
) => {
  const LazyComponent = lazy(importFunc);

  const LoadableComponent = (props: ComponentProps<T>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return LoadableComponent;
};

export default useLoadable;
