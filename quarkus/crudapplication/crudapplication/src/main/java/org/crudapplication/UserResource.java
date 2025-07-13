package org.crudapplication;


import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

import java.awt.*;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    @GET
    public List<User> getAllUsers(){
        return User.listAll();
    }

    @GET
    @Path("/{id}")
    public User getUserById (@PathParam("id") Long id){
        return User.findById(id);
    }

    @POST
    @Transactional
    public Response create(User user) {
        if (user == null) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        user.persist();
        return Response.status(Response.Status.CREATED).entity(user).build();
    }

    @PUT
    @Path("/{id}")
    @Transactional
    public Response updateUser(@PathParam("id") Long id, User userData) {
        User user = User.findById(id);
        if (user == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        user.setName(userData.getName());
        user.setEmail(userData.getEmail());
        return Response.ok(user).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public void deleteUser (@PathParam("id") Long id){
        User.deleteById(id);
    }
}
