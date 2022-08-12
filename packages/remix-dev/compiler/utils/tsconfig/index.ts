import tsConfigPaths from "tsconfig-paths";

export function createMatchPath(tsconfigPath: string | undefined) {
  let configLoaderResult = tsConfigPaths.loadConfig(tsconfigPath);

  if (configLoaderResult.resultType === "failed") {
    throw new Error(`🚨 Oops! ${configLoaderResult.message}`);
  }

  return tsConfigPaths.createMatchPath(
    configLoaderResult.absoluteBaseUrl,
    configLoaderResult.paths,
    configLoaderResult.mainFields,
    configLoaderResult.addMatchAll
  );
}
