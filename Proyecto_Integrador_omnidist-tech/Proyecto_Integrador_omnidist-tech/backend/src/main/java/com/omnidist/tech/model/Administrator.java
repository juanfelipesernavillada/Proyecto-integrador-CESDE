package com.omnidist.tech.model;

/** A user subtype whose role identifies administrative responsibilities. */
public class Administrator extends User {

    public Administrator() {
        super();
    }

    public Administrator(Long id, String name, String email,
                         String passwordHash, boolean active) {
        super(id, name, email, passwordHash, active);
    }

    @Override
    public String getRole() {
        return "ADMINISTRATOR";
    }
}
