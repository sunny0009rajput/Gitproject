package org.crudapps.Controller;


import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.crudapps.Entity.Users;
import org.crudapps.Repository.UserRepository;
import org.crudapps.Services.UserService;

import jakarta.inject.Inject;
import java.util.List;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserController {

    @Inject
    UserService userService;

    @GET
    public List<Users> getAllUsers(){
        return userService.getAllUsers();
    }

    @GET
    @Path("/{id}")
    public Response getUserById(@PathParam("id") Long id){
        Users users = userService.getUserById(id);
        if(users == null){
            return Response.status(Response.Status.NOT_FOUND).entity("user with id "+id+ "not found").build();

        }
        return Response.ok(users).build();
    }

    @POST
    public Response createUser(Users users){
        if(users.getName() == null || users.getEmail() == null){
            return Response.status(Response.Status.BAD_REQUEST).entity("name and email are required").build();
        }
        Users createdUsers = userService.createUser(users);
        return Response.status(Response.Status.CREATED).entity(createdUsers).build();
    }

    @PUT
    @Path("/{id}")
    public Response updateUser(@PathParam("id") Long id, Users users){
        Users updatedUser = userService.updateUsers(id,users);
        if(updatedUser == null){
            return Response.status(Response.Status.NOT_FOUND).entity("user with the id "+id+ "not found for updata").build();
        }
        return Response.ok(updatedUser).build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteUser(@PathParam("id") Long id){
        boolean deleted = userService.deleteUsers(id);
        if(!deleted){
            return Response.status(Response.Status.NOT_FOUND).entity("user with id "+id+ "not found for deletion").build();
        }
        return Response.noContent().build();
    }
}
