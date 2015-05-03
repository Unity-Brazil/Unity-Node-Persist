using System;
using UnityEngine;

[Serializable]
public class User
{
    public int id { get; private set; }
    public string username { get; set; }
    public string email { get; set; }
    public DateTime? createdAt { get; set; }

    public User() {}
    public User(string username, string email)
    {
        this.username = username;
        this.email = email;
    }

    public override string ToString()
    {
        return String.Format("id: {0}, username: {1}, email: {2}, createdAt: {3}", id, username, email, createdAt);
    }
}
