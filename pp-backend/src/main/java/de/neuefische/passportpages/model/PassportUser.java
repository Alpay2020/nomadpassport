package de.neuefische.passportpages.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "user")
public class PassportUser {

    @Id
    private String username;
    private String password;
    private String displayName;
    private String role;
    private UserSource source;
}
