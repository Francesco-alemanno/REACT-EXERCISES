export function LocationComponent(){
    const { location, getCurrentLocation, loading, error } = useCurrentLocation();

    return (
      <div>
        <button onClick={getCurrentLocation} disabled={loading}>
          {loading ? 'Getting Location...' : 'Get Current Location'}
        </button>
  
        {error && <p>Error: {error}</p>}
  
        {location ? (
          <div>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ) : (
          !loading && <p>Location not available yet.</p>
        )}
      </div>
    );
  };
