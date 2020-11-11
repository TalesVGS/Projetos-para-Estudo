package br.com.capacitacaobiblioteca.domain.Categoriadelivro;

import br.com.capacitacaobiblioteca.domain.Livro.Livro;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "categoria")
@Getter
@Setter
public class Categoria implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    long id;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "categoria")
    private String categoria;

    @JsonIgnore
    @OneToMany(mappedBy = "categoria")
    private List<Livro> livros;

}
