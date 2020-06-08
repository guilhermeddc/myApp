import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import theme from '../../styles/theme';

import {
  Container,
  Button,
  Title,
  Experiences,
  Company,
  Line,
  Office,
  WorkingTime,
  Local,
  Functions,
  Margin,
} from './styles';

const Experience = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" color={theme.colors.light} size={32} />
      </Button>

      <Title>Experiências Profissionais </Title>

      <Experiences>
        <Company>Meta</Company>
        <Line />
        <Office>Desenvolvedor Fullstack</Office>
        <WorkingTime>November 2019 - June 2020 (8 months)</WorkingTime>
        <Local>Restinga Seca, Rio Grande do Sul, Brasil</Local>
        <Functions>
          Desenvolvedor FullStack trabalhando com Node no backend e Vue / React
          no front, participei de projetos Mobile com React Native, trabalhava
          com métodos ágeis para diversos clientes.
        </Functions>
      </Experiences>

      <Experiences>
        <Company>Claro Brasil</Company>
        <Line />
        <Office>Técnico 2</Office>
        <WorkingTime>
          October 2013 - November 2019 (6 years 2 months)
        </WorkingTime>
        <Local>Santa Maria, Rio Grande do Sul, Brasil</Local>
        <Functions>
          Atendimento técnico indoor ao cliente sobre problemas técnicos aos
          produtos da Net/Claro internet, televisão e telefone fixo.
        </Functions>
      </Experiences>

      <Experiences>
        <Company>Kb Informática</Company>
        <Line />
        <Office>Equipe técnica</Office>
        <WorkingTime>
          August 2011 - September 2013 (2 years 2 months)
        </WorkingTime>
        <Local>Santa Maria, Rio Grande do Sul, Brasil</Local>
        <Functions>
          Manutenção de equipamentos de informatica e atendimento ao cliente
          sobre problemas ou duvidas técnicas.
        </Functions>
      </Experiences>

      <Experiences>
        <Company>Sarturi Construções LTDA</Company>
        <Line />
        <Office>Auxiliar de escritório</Office>
        <WorkingTime>
          August 2011 - September 2013 (2 years 2 months)
        </WorkingTime>
        <Local>São Pedro do Sul, Brasil</Local>
        <Functions>
          Auxiliava na contabilidade e coordenação de empregados.
        </Functions>
      </Experiences>

      <Experiences>
        <Company>Anhanguera Educacional</Company>
        <Line />
        <Office>Orientador educacional</Office>
        <WorkingTime>May 2009 - December 2009 (8 months)</WorkingTime>
        <Local>São Pedro do Sul, Brasil</Local>
        <Functions>
          Orientava e retirava duvidas sobre o conteúdo das aulas sobre
          informatica.
        </Functions>
      </Experiences>
      <Margin />
    </Container>
  );
};

export default Experience;
