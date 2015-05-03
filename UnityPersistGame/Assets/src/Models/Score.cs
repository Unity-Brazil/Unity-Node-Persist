using System;
using UnityEngine;

[Serializable]
public class Score
{
    public int id { get; private set; }
    public double value { get; set; }
    public User user;

    public Score() { }
    public Score(double score)
    {
        value = score;
    }

    public override string ToString()
    {
        return String.Format("id: {0}, value: {1}", id, value);
    }
}
