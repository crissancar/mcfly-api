Feature: Get detail of user
  In order to have users
  As a user
  I want to see the details of a user

  Scenario: A valid existing user
    Given I send a GET request to "/users/ef8ac118-8d7f-49cc-abec-78e0d05af80a"
    Then the response status code should be 200
    And the response content should be:
    """
    {
      "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
      "username": "Cristian",
      "email": "cristian@mail.com"
    }
    """