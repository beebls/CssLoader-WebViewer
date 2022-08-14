export function calcMinVersion(version) {
  switch (version) {
    case 2:
      return "1.1.0";
    default:
      return "1.0.0";
  }
}
