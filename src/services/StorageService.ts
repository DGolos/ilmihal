import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export type StorageKeys =
    "languageData" | "locationData" | "prayerData";

export const storageService = {
    invalidate: async () => {
        await Storage.clear();
    },
    set: async (key: StorageKeys, value: any) => {
        if (typeof value === "string") await Storage.set({ key, value });
        else await Storage.set({ key, value: JSON.stringify(value) });
    },
    remove: async (key: StorageKeys) => {
        await Storage.remove({ key });
    },
    get: async (key: StorageKeys) => {
        const value = (await Storage.get({ key })).value;
        return value ?? null;
    }
};