import * as packageJson from '../package.json';

// A class that gets the version from the package.json file
export class VersionUtil {
  version: string;
  constructor() {
    // Check if the version is defined in the package.json file
    if (!packageJson.version) {
      throw new Error('Version not found in package.json');
    }
    this.version = packageJson.version;
  }
  getVersion() {
    return this.version;
  }
}
