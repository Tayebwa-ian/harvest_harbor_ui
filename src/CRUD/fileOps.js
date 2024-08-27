import userToken from "../utils/userToken";

async function fileOps(url, info, reqMethod="POST") {
    let data = null;
    let error = "Request has no errors";
    let statusCode;

    try {
      const res = await fetch(url, {
        method: reqMethod,
        headers: {
          "Authorization": `Bearer ${userToken().token}`,
        },
        body: info
      });
      statusCode = res.status;
      if (!res.ok) { // error coming back from server
        console.log(res);
        throw Error('could not fetch the data for that resource');
      };
      const resp_data = await res.json();
      data = resp_data;
    } catch(err) {
      // auto catches network / connection error
      error = err.message;
    };
    return {data, error, statusCode};
}

export default fileOps;
