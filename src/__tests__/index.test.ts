import { VersionUtil } from '../index';

describe('VersionUtil', () => {
  it('should return a valid semver string', () => {
    const versionUtil = new VersionUtil();
    // This regex is from https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
    expect(versionUtil.getVersion()).toMatch(
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
    );
  });
});
