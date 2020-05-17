package com.dtu.AISSystem.controller;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class ApiController {
	
  /*
   * Get all users list.
   *
   * @return the list
   */
	@RequestMapping(value = "/user", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ArrayList<String> getAllUsers() {
		ArrayList<String> result = new ArrayList<String>();
		result.add("result 1");
		result.add("result 1");
		return result;
	}
	
	@RequestMapping(value = "/greeting", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	List<String> greeting() {
	    String greeting1 = "Hello 1";
	    String greeting2 = "Hello 2";
	    List<String> list = new ArrayList<>();
	    list.add(greeting1);
	    list.add(greeting2);
	    return list;
	}
}