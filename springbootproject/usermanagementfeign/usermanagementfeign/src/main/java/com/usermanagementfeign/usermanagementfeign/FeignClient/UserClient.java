package com.usermanagementfeign.usermanagementfeign.FeignClient;

import com.usermanagementfeign.usermanagementfeign.entity.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name="userClient",url = "${user.management.api.base-url}")
public interface UserClient {
    @PostMapping("/user/api")
    User createUser(@RequestBody User user);

    @GetMapping("/user/api/{userId}")
    User getUser(@PathVariable("userId") Long userId);

    @GetMapping("/user/api")
    List<User> getAllUser();

    @PutMapping("/user/api/{userId}")
    User update(@PathVariable("userId") Long userId,@RequestBody User user);

    @DeleteMapping("/user/api/{userId}")
    void deleteUser(@PathVariable Long userId);


}
