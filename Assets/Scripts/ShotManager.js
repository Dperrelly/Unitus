#pragma strict

var bulletPrefab:Transform;

function Update () {
    if(Input.GetButtonDown("Fire1"))
    {
        var bullet = Instantiate(bulletPrefab, GameObject.Find("projectileSpawnPoint").transform.position, Quaternion.identity);  
    }
}