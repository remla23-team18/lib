import { VersionUtil } from '../versionUtil';
import { expect } from '@jest/globals';
import { semverRegex } from './semverRegex';

describe('VersionUtil', () => {
  it('should return a valid semver string', () => {
    const versionUtil = new VersionUtil();
    expect(versionUtil.getVersion()).toMatch(semverRegex);
  });
});
