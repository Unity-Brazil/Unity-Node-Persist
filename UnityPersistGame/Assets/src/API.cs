using System;
using LitJson;
using System.Linq;
using System.Text;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

/// <summary>
/// API
/// </summary>
[Serializable]
public class API
{

    /// <summary>
    /// The www.
    /// </summary>
    private WWW www;

    /// <summary>
    /// The form.
    /// </summary>
    private WWWForm form;

    /// <summary>
    /// The BAS e_ UR.
    /// </summary>
#if UNITY_EDITOR
    private const string BASE_URL = "http://localhost:3000/";
#else
    private const string BASE_URL = "https://unity-node-persist.herokuapp.com/";
#endif

    public static string GetServer()
    {
        return BASE_URL;
    }

    /// <summary>
    /// The headers.
    /// </summary>
    private Dictionary<string, string> headers;

    public API(string method)
    {
        headers = new Dictionary<string, string>();
        headers.Add("Content-Type", "application/json");

        www = new WWW(BASE_URL + method);
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="API"/> class.
    /// </summary>
    /// <param name="method">Method.</param>
    /// <param name="value">Value.</param>
    public API(string method, string value) : this (method)
    {
        www = new WWW(BASE_URL+method, new UTF8Encoding().GetBytes(value), headers);
    }

    /// <summary>
    /// Gets the data.
    /// </summary>
    public WWW GetWWW()
    {
        return www;
    }

    /// <summary>
    /// Gets the result.
    /// </summary>
    /// <returns>The result.</returns>
    public string GetResult()
    {
        return www.text;
    }

    /// <summary>
    /// Gets the result json.
    /// </summary>
    /// <returns>The result json.</returns>
    public JsonData GetResultJson()
    {
        return JsonMapper.ToObject(GetResult())["result"];
    }

    /// <summary>
    /// Determines whether this json has error.
    /// </summary>
    /// <returns><c>true</c> if this instance has error; otherwise, <c>false</c>.</returns>
    public bool HasError()
    {
        IDictionary dict = (IDictionary)JsonMapper.ToObject(GetResult());
        return dict.Contains("error");
    }

    /// <summary>
    /// Gets the error json.
    /// </summary>
    /// <returns>The error json.</returns>
    public JsonData GetErrorJson()
    {
        return JsonMapper.ToObject(GetResult())["error"];
    }

    /// <summary>
    /// Gets the result json.
    /// </summary>
    /// <returns>The result json.</returns>
    /// <param name="json">Json.</param>
    public JsonData GetResultJson(string json)
    {
        return JsonMapper.ToObject(json)["result"];
    }

    /// <summary>
    /// Casts the model.
    /// </summary>
    /// <returns>The model.</returns>
    /// <param name="json">Json.</param>
    /// <typeparam name="T">Generic Model (Score and User).</typeparam>
    public T CastModel<T>(string json)
    {
        return JsonMapper.ToObject<T>(json);
    }
}
