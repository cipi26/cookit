export const handleError = (error: string) => {
  const isDevEnv = process.env.NODE_ENV === "development";

  if (isDevEnv) throw new Error(error);
  throw new Error();
};
