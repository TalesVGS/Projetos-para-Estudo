package br.com.capacitacaobiblioteca.domain.Seções;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeçãoRepository extends JpaRepository<Seção, Long> {
}
