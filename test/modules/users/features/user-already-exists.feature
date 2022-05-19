Feature: User already exists
  In order to have unique users
  As a user with admin permissions
  I want to create a new invalid user

  Scenario: An invalid existing user
    Given I send a PUT request to "/users/349ce17b-e886-4e71-8e59-d3d79dc0a143" with body:
    """
    {
      "username": "Cristian",
      "email": "cristian@mail.com",
      "password": "1234"
    }
    """
    Then the response status code should be 400
    And the response should be empty