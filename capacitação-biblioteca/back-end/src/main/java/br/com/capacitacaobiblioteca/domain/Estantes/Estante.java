package br.com.capacitacaobiblioteca.domain.Estantes;

import br.com.capacitacaobiblioteca.domain.Livro.Livro;
import br.com.capacitacaobiblioteca.domain.Seções.Seção;
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
@Table(name = "estante")
@Getter
@Setter
public class Estante implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    long id;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "estante")
    private String estante;

    @JsonIgnore
    @OneToMany(mappedBy = "estante")
    private List<Livro> livros;

    @NotNull
    @JoinColumn(name = "seção_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Seção seção;

}
