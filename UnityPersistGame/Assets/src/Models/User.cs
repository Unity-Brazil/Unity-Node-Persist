using System;
using UnityEngine;

[Serializable]
public class User
{
    public int id { get; private set; }
    public string username { get; set; }
    public string email { get; set; }
    public DateTime createdAt { get; private set; }

    public override string ToString()
    {
        return String.Format("id: {0}, username: {1}, email: {2}, createdAt: {3}", id, username, email, createdAt);
    }
}
