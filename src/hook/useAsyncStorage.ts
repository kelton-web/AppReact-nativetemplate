/**
 * Un hook personnalisé pour gérer les données dans AsyncStorage de manière asynchrone.
 *
 * @template T Le type de données stockées.
 *
 * @param {string} key La clé sous laquelle les données sont stockées dans AsyncStorage.
 * @param {T} initialValue La valeur initiale des données.
 * @returns {Object} Un objet contenant les données, l'état de chargement, les erreurs, et les fonctions pour mettre à jour ou supprimer les données.
 *
 * @example
 * Utilisation du hook dans un composant :
 * ```jsx
 * const { data, loading, error, setData, removeData } = useAsyncStorage('maCle', 'Valeur Initiale');
 * ```
 */
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ERROR_CODES = {
  STORAGE_ERROR: 'STORAGE_ERROR',
  NOT_FOUND: 'NOT_FOUND',
};

const useAsyncStorage = <T>(key: string, initialValue: T) => {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer les données depuis AsyncStorage
  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem(key);
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      }
    } catch (error) {
      setError(ERROR_CODES.STORAGE_ERROR);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour sauvegarder les données dans AsyncStorage
  const setDataAsyncStorage = async (newValue: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
      setData(newValue);
    } catch (error) {
      setError(ERROR_CODES.STORAGE_ERROR);
    }
  };

  // Fonction pour supprimer les données depuis AsyncStorage
  const removeDataAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setData(initialValue);
    } catch (error) {
      setError(ERROR_CODES.STORAGE_ERROR);
    }
  };

  useEffect(() => {
    getData(); // Charge les données lors de l'initialisation
  }, []);

  return {
    data,
    loading,
    error,
    setData: setDataAsyncStorage,
    removeData: removeDataAsyncStorage,
  };
};

export default useAsyncStorage;
