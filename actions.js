export const DISPLAY_LOADER = 'DISPLAY_LOADER';

export function showLoader(bool) {
  return {
    type: DISPLAY_LOADER, data: bool,
  };
}
