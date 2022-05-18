Feature: Create a new user
  In order to have users
  As a user with admin permissions
  I want to create a new user

  Scenario: A valid unexisting user
    Given I send a PUT request to "/users/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "username": "Cristian",
      "email": "cristian@mail.com",
      "password": "1234"
    }
    """
    Then the response status code should be 201
    And the response should be empty