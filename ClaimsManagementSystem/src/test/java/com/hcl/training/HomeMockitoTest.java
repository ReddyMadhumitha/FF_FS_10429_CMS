/**
 * 
 */
package com.hcl.training;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
import org.apache.catalina.filters.CorsFilter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.validation.BindingResult;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.hcl.training.controller.UserController;
import com.hcl.training.model.User;

/**
 * @author reddy-madhumitha
 *
 */

public class HomeMockitoTest {
	@Mock
	private BindingResult mockbindingResult;
	 private MockMvc mockMvc;
     @InjectMocks
     private UserController userController;
     @BeforeEach //--> springboot + junit5
     public void init(){
         MockitoAnnotations.initMocks(this); //initialize the mockito lib/objects
         mockMvc = MockMvcBuilders         //builds the our main test object
                 .standaloneSetup(userController) //use for controller class
                 //.addFilters(new CorsFilter())      //cross origin resource sharing -- cross site scripting
                 .build();
     }



     @Test
     public void testGetRegistrationTest() {
     try {
         mockMvc.perform(
                 get("/register"))
                 .andExpect(status().isOk())
                 .andExpect(view().name("register"));
     } catch (Exception e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
     }
     }
     @Test
     public void testGetLoginTest() {
     try {
         mockMvc.perform(
                 get("/login"))
                 .andExpect(status().isOk())
                 .andExpect(view().name("login"));
     } catch (Exception e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
     }
     }

     @Test
     public void testVerifyAgeError(){
    	 
          try {
             Mockito
             .verify(mockbindingResult).reject("age","Please enter age");
          } catch (Exception e) {
              // TODO Auto-generated catch block
              e.printStackTrace();
          }
    	 
     }
     @Test
     public void testverifyLoginUserNameError() {
    	 try {
             mockMvc.perform(post("/login")
            		 .param("userId", "1")
            		 .param("password","madhu590"))
            		 .andExpect(status().isOk())
            		 .andExpect(model().attributeHasFieldErrors("user","userId"));
              } catch (Exception e) {
              // TODO Auto-generated catch block
          }
    	 
     }
     @Test
     public void testReg() {
//    	 User user = new User();
//         user.setId(1);
//         user.setFirstName("Madhu");
//         user.setLastName("Mitha");
//         user.setAge(20);
//         user.setGender("f");
//         user.setContactNumber("1234567890");
//         user.setUserId("A1");
//         user.setPassword("madhu590");
//         user.setRoleId("Admin");
         try {
             mockMvc
             .perform(post("/saveData")//.content(asJsonString(user))
                     //.contentType(MediaType.APPLICATION_JSON)//.accept(MediaType.APPLICATION_JSON))
            		 .param("id", "51887645")
                     .param("firstName","Madhu")
                     .param("lastName","mitha")
                     .param("age","20") 
                     .param("gender","f")
                     .param("contactNumber","1234567890")
                     .param("userId","A1")
                     .param("dateofbirth", "12-09-1998")
                     .param("gender","f")
                     .param("password","madhu590")
                     .param("roleId", "Admin"))
             .andExpect(status().isOk())
             .andExpect(view().name("success"))
             .andReturn();
                    
         
             
         } catch (Exception e) {
             // TODO Auto-generated catch block
             e.printStackTrace();
         }
     }
     @Test
     public void testFailReg() {
    	 User user = new User();
         user.setId(1);
         user.setFirstName("Madhu");
         user.setLastName("Mitha");
         user.setAge(20);
         user.setGender("f");
       //  user.setContactNumber("1234567890");
         //user.setUserId("A1");
         user.setPassword("madhu590");
         //user.setRoleId("Admin");
         try {
             mockMvc
             .perform(post("/save").content(asJsonString(user))
                     .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
             .andExpect(status().isOk())
             .andExpect(view().name("register"))
             .andReturn();
         } catch (Exception e) {
             // TODO Auto-generated catch block
             e.printStackTrace();
         }
     }
     @Test
     public void testLogin() {
         User user = new User();
         user.setId(1);
         user.setPassword("123456");
         try {
             mockMvc
             .perform(post("/login").content(asJsonString(user))
                     .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
             .andExpect(status().isOk())
             .andExpect(view().name("success"))
             .andReturn();
         } catch (Exception e) {
             // TODO Auto-generated catch block
             e.printStackTrace();
         }
     }
     @Test
     public void testFailLogin() {
         User user = new User();
         user.setId(1);
         user.setPassword("cdf");
         try {
             mockMvc
             .perform(post("/login").content(asJsonString(user))
                     .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
             .andExpect(status().isOk())
             .andExpect(view().name("failed"))
             .andReturn();
         } catch (Exception e) {
             // TODO Auto-generated catch block
             e.printStackTrace();
         }
     }
     public static String asJsonString(final Object obj) {
         try {
         return new ObjectMapper().writeValueAsString(obj);
         } catch (Exception e) {
         throw new RuntimeException(e);
         }
         }

}
