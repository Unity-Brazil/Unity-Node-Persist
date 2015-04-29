using System;
using LitJson;
using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;

public class Grid : MonoBehaviour
{

    private API api;
    private Row scoreGrid;
    public GridLayoutGroup GridRows;
    public GameObject RowPrefab;

    public void AddRow()
    {
        GameObject row = (GameObject)Instantiate(RowPrefab);
        row.transform.SetParent(GridRows.transform);
        row.transform.localScale = new Vector3(1,1,1);
        scoreGrid = row.GetComponent<Row>();
    }

    public void Reload()
    {
        api = new API("scores");
        StartCoroutine(DoRequest());
    }

    private void ClearGrid()
    {
        foreach(Transform child in GridRows.gameObject.transform)
            Destroy(child.gameObject);
    }

    private void BindGrid()
    {
        ClearGrid();

        JsonData data = api.GetResultJson();

        for(int i = 0; i < data.Count; i++) {

            AddRow();
            scoreGrid.score = api.CastModel<Score>(data[i].ToJson());
            scoreGrid.score.user = api.CastModel<User>(data[i]["user"].ToJson());
            scoreGrid.UpdateValues();
        }
    }

    IEnumerator DoRequest()
    {
        yield return api.GetWWW();
        BindGrid();
    }
}
