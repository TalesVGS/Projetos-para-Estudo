package br.com.capacitacaobiblioteca.domain.Seções;

import br.com.capacitacaobiblioteca.domain.Estantes.Estante;
import br.com.capacitacaobiblioteca.domain.Livro.Livro;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "seção")
@Getter
@Setter
public class Seção implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    long id;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "seção")
    private String seção;

    @JsonIgnore
    @OneToMany(mappedBy = "seção")
    private List<Estante> estantes;

}
