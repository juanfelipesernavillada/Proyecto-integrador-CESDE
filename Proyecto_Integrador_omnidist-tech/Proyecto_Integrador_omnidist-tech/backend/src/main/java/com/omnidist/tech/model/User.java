package com.omnidist.tech.model;

/**
 * Shared abstraction for people who can access the OmniDist Tech system.
 * Common user data lives here so subclasses do not duplicate attributes.
 */
public abstract class User {
    private Long id;
    private String name;
    private String email;
    private String passwordHash;
    private boolean active;

    protected User() {
        // Required for bean-style construction and serialization frameworks.
    }

    protected User(Long id, String name, String email,
                   String passwordHash, boolean active) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.active = active;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    /** Returns the stored password hash, never a plaintext password. */
    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    /**
     * Polymorphic role identifier supplied by each concrete user subtype.
     * This avoids keeping a free-form role string that could contradict the subtype.
     */
    public abstract String getRole();
}
