using System;
using UnityEngine;

[Serializable]
public class Score
{
    public int id { get; private set; }
    public float value { get; set; }
    public User user { get; set; }

    public override string ToString()
    {
        return String.Format("id: {0}, value: {1}", id, value);
    }
}
