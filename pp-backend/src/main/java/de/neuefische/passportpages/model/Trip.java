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
    //@Pattern(regexp = "^[0-9]{2}-[0-9]{2}-[0-9]{4}$", message = "date must be DD-MM-YYYY")
    private String dateTripStart;
    //@Pattern(regexp = "^[0-9]{2}-[0-9]{2}-[0-9]{4}$", message = "date must be DD-MM-YYYY")
    private String dateTripEnd;
    private String destinationCountry;

}
