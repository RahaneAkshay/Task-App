const getTimeStamp = (): string => {
  return new Date().toISOString();
};

const info = (namespace: string, message: string, object?: any): void => {
  if (object) {
    console.info(
      `[${getTimeStamp()}] [info] [${namespace}] ${message}`,
      object
    );
  } else {
    console.info(`[${getTimeStamp()}] [info] [${namespace}] ${message}`);
  }
};

const error = (namespace: string, message: string, object?: any): void => {
  if (object) {
    console.error(
      `[${getTimeStamp()}] [debug] [${namespace}] ${message}`,
      object
    );
  } else {
    console.error(`[${getTimeStamp()}] [debug] [${namespace}] ${message}`);
  }
};

export const logging = {
  info,
  error,
};
