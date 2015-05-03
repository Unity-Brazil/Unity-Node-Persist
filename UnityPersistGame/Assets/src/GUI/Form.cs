using System;
using LitJson;
using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Form : MonoBehaviour
{

    private API api;
    private User user;

    public InputField txtEmail, txtUserName, txtScore;
    public Text lblErrors, lblUsername, lblEmail;

    private bool HasErrors;

    public void CreateUser()
    {
        User user = new User(txtUserName.text, txtEmail.text);

        //Let the sequelize inserts the timeStamp
        user.createdAt = null;
        api = new API("Users", JsonMapper.ToJson(user));
        StartCoroutine(DoRequestUser());
    }

    public void SignInUser()
    {
        api = new API("Users/" + txtEmail.text);
        StartCoroutine(DoRequestUser());
    }

    public void CreateScore()
    {
        Score score = new Score(float.Parse(txtScore.text));
        score.user  = user;
        api = new API("Scores", JsonMapper.ToJson(score));
        StartCoroutine(DoRequestScore());
    }

    private void UserResult()
    {
        if(api.HasError())
            ShowErrors();
        else if(!CheckUserName())
            lblErrors.text += "Username doesn't match";
        else {
            Panels.Instance.ShowScore();
            Debug.Log(api.GetResultJson().ToJson());
            user = api.CastModel<User>(api.GetResultJson().ToJson());
            lblEmail.text = user.email;
            lblUsername.text = user.username;
        }
    }

    private bool CheckUserName()
    {
        return api.GetResultJson()["username"].ToString() == txtUserName.text;
    }

    private void ScoreResult()
    {
        if(api.HasError())
            ShowErrors();
        else {
            Panels.Instance.ShowGrid();
        }
    }

    private void ShowErrors()
    {
            lblErrors.text = string.Empty;
            JsonData errors = api.GetErrorJson()["errors"];
            for(int i = 0; i < errors.Count; i++)
                lblErrors.text += errors[i]["message"] + "\n";
    }

    IEnumerator DoRequestUser()
    {
        yield return api.GetWWW();
        UserResult();
    }

    IEnumerator DoRequestScore()
    {
        yield return api.GetWWW();
        ScoreResult();
    }
}
