// freeCodeCamp.org daily challenge - May 17, 2026
// Given a MongoDB ID string, return its creation time as an ISO 8601 string.
//     A MongoDB ID is a 24-character hex string. The first 8 characters represent a Unix timestamp (in seconds) encoded as a base-16 integer.
// For example, "6a094b50bcf86cd799439011" has a timestamp of "6a094b50" in hex, which is 1778994000 in decimal, representing a creation time of "2026-05-17T05:00:00.000Z".

  function mongoIdToDate(id) {
    const hex = id.slice(0,8);                          // Grabs hex from Mongo ID
    const dec = parseInt(hex,16);                       // Obtains date in decimal
    console.log(dec)                                    
    const date = new Date(dec*10**3).toISOString();     // Converts decimal to ISO
  return date;
}

mongoIdToDate("695344eb1f4a4c1123042128") // "2025-12-30T03:20:11.000Z"
mongoIdToDate("69f571c3d7711807afd3dd55") //"2026-05-02T03:38:43.000Z"
