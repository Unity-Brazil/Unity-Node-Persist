using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Row : MonoBehaviour
{
    private Text TXTScore, TXTUsername, TXTCreatedAt;

    [HideInInspector]
    public Score score;

    private void Awake()
    {
        TXTScore = transform.FindChild("TXTScore").GetComponent<Text>();
        TXTUsername = transform.FindChild("TXTUsername").GetComponent<Text>();
        TXTCreatedAt = transform.FindChild("TXTCreatedAt").GetComponent<Text>();

        score = new Score();
    }

    public void UpdateValues()
    {
        TXTScore.text     = score.value.ToString();
        TXTUsername.text  = score.user.username;
        TXTCreatedAt.text = score.user.createdAt.ToString();
    }

}
