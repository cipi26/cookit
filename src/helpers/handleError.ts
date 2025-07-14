export const handleError = (error: string | undefined) => {
  const isDevEnv = process.env.NODE_ENV === "development";

  if (error) {
    if (isDevEnv) throw new Error(error);
    else throw new Error();
  }
};
