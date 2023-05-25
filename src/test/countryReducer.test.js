import countryReducer, { fetchCountry } from '../state/countryReducer';

describe('country reducer', () => {
  it('should handle initial state', () => {
    expect(countryReducer(undefined, { type: 'unknown' })).toEqual({
      countries: [],
      status: 'idle',
      error: null,
    });
  });

  it('should handle fetchCountry.pending', () => {
    expect(countryReducer({ countries: [], status: 'idle', error: null }, { type: fetchCountry.pending.type })).toEqual({
      countries: [],
      status: 'loading',
      error: null,
    });
  });

  it('should handle fetchCountry.fulfilled', () => {
    expect(
      countryReducer({ countries: [], status: 'loading', error: null }, { type: fetchCountry.fulfilled.type, payload: [{ name: 'India' }] }),
    ).toEqual({
      countries: [{ name: 'India' }],
      status: 'success',
      error: null,
    });
  });

  it('should handle fetchCountry.rejected', () => {
    expect(
      countryReducer({ countries: [], status: 'loading', error: null }, { type: fetchCountry.rejected.type, error: { message: 'Failed to fetch countries.' } }),
    ).toEqual({
      countries: [],
      status: 'error',
      error: 'Failed to fetch countries.',
    });
  });
});
