using Microsoft.AspNetCore.Mvc;
using BackendApi.Models;
using BackendApi.Data;

namespace BackendApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ClientsController : ControllerBase
{
    private readonly ILogger<ClientsController> _logger;
    private CustomStorage? _storage;
    public static CustomStorage Storage = new();

    public ClientsController(ILogger<ClientsController> logger)
    {
        _logger = logger;
    }



    [HttpDelete("{id}")]
    public ActionResult Remove(int id) {
        try
        {
            Storage.RemoveClientById(id);
            return Ok();
        }
        catch (System.Exception)
        {
            return BadRequest("Error ocurred");
        }
    }



    [HttpPost]
    public ActionResult Create([FromBody] Clients newClient) 
    {

        if (Storage.AddClient(newClient))
            return Ok();
        
        
        return BadRequest();
    }


    [HttpGet]
    public ActionResult Get()
    {
        return new JsonResult(Storage.GetAll());
    }
}
