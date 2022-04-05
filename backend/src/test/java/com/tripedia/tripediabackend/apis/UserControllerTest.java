package com.tripedia.tripediabackend.apis;

import com.tripedia.tripediabackend.dao.UserDao;
import com.tripedia.tripediabackend.model.User;
import com.tripedia.tripediabackend.service.UserService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;


import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void getAllUser() throws Exception{
//        User user = new User("ZiyiXu");
//        List<User> users = Arrays.asList(user);
//
//        Mockito.when(userService.getAllUser()).thenReturn(users);
//
//        this.mockMvc.perform(get("/"))
//                .andExpect(status().isOk())
//                .andExpect((ResultMatcher) jsonPath("$[0].userName", Matchers.is("ZiyiXu")));

    }

    @Test
    void addUser() throws  Exception{
//        this.mockMvc.perform(post("/add/{userName}", "ZiyiXu"))
//                .contentType("application/json")
//                .andExpect(status().isOk());
    }

    @Test
    void loginUser() {
    }

    @Test
    void delUser() {
    }

    @Test
    void updateUser() {
    }
}