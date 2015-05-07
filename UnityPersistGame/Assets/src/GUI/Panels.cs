using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Panels : MonoBehaviour
{

    public Image PanelEmail;
    public Image PanelScore;
    public Image PanelGrid;

    public static Panels Instance { get; private set; }

    public Text lblServer;

    public void Awake()
    {
        Instance = this;

        //Initialize with email registration panel
        this.ShowEmail();

        lblServer.text = API.GetServer();
    }

    public void ShowEmail()
    {
        DisablePanels();
        PanelEmail.gameObject.SetActive(true);
    }

    public void ShowScore()
    {
        DisablePanels();
        PanelScore.gameObject.SetActive(true);
    }

    public void ShowGrid()
    {
        DisablePanels();
        PanelGrid.gameObject.SetActive(true);
    }

    private void DisablePanels()
    {
        PanelEmail.gameObject.SetActive(false);
        PanelScore.gameObject.SetActive(false);
        PanelGrid.gameObject.SetActive(false);
    }
}
