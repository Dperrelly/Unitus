#pragma strict

var bulletPrefab:GameObject;

function Update () {
    if(Input.GetButtonDown("Fire1"))
    {
        var bullet = Instantiate(bulletPrefab, GameObject.Find("projectileSpawnPoint").transform.position, bulletPrefab.transform.rotation);  
    }
}