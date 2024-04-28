let prefix = "";

if (process.env.NODE_ENV === "production") {
  prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export { prefix };
