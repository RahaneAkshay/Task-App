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

const warn = (namespace: string, message: string, object?: any): void => {
  if (object) {
    console.warn(
      `[${getTimeStamp()}] [warn] [${namespace}] ${message}`,
      object
    );
  } else {
    console.warn(`[${getTimeStamp()}] [warn] [${namespace}] ${message}`);
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
  warn,
  error,
};
