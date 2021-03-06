package de.neuefische.passportpages.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class Trip {

    @Id
    private String id;
    private String dateTripStart;
    private String dateTripEnd;
    private String destinationCountry;
    private String user;

}
