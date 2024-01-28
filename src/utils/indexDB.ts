interface TokenData {
  id: number;
  token: string;
}

async function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("FCMTokensDB", 1);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
      db.createObjectStore("tokens", { keyPath: "id" });
    };

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
      resolve(db);
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
}

export async function saveTokenToDB(token: string): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("tokens", "readwrite");
    const store = transaction.objectStore("tokens");

    const data: TokenData = { id: 1, token };
    const request = store.put(data);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
}

export async function getTokenFromDB(): Promise<string | null> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("tokens", "readonly");
    const store = transaction.objectStore("tokens");

    const request = store.get(1);

    request.onsuccess = (event) => {
      const tokenData = (event.target as IDBRequest).result as TokenData | undefined;
      const token = tokenData?.token || null;
      resolve(token);
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
}

export async function getStoredToken() {
  return await getTokenFromDB();
}
