import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import theme from '../../styles/theme';

import {
  Container,
  Button,
  Title,
  Educations,
  Institution,
  Line,
  Course,
  CourseTime,
  Margin,
} from './styles';

const Education = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" color={theme.colors.light} size={32} />
      </Button>

      <Title>Formação Acadêmica </Title>

      <Educations>
        <Institution>Antonio Meneghetti Faculdade - AMF</Institution>
        <Line />
        <Course>
          Bacharelado em Sistemas de Informação, Tecnologia da Informação
        </Course>
        <CourseTime>(2018 - 2023)</CourseTime>
      </Educations>

      <Educations>
        <Institution>Faculdade Integrada de Santa Maria - FISMA</Institution>
        <Line />
        <Course>Técnico, Técnico em informática</Course>
        <CourseTime>(2005 - 2008)</CourseTime>
      </Educations>
      <Margin />

      <Title>Certificados </Title>

      <Educations>
        <Institution>
          Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!
        </Institution>
        <Line />
        <Course>Udemy Brasil</Course>
        <CourseTime>(Junho - 2020)</CourseTime>
      </Educations>

      <Educations>
        <Institution>Vue.js Completo</Institution>
        <Line />
        <Course>Origamid</Course>
        <CourseTime>(Junho - 2020)</CourseTime>
      </Educations>

      <Educations>
        <Institution>
          Criando poderosas API's RESTful com Django Rest Framework
        </Institution>
        <Line />
        <Course>Udemy Brasil</Course>
        <CourseTime>(Fevereiro - 2020)</CourseTime>
      </Educations>

      <Educations>
        <Institution>CSS Flexbox</Institution>
        <Line />
        <Course>Origamid</Course>
        <CourseTime>(Janeiro - 2020)</CourseTime>
      </Educations>

      <Educations>
        <Institution>WordPress REST API</Institution>
        <Line />
        <Course>Origamid</Course>
        <CourseTime>(Janeiro - 2020)</CourseTime>
      </Educations>

      <Educations>
        <Institution>Bootstrap 4</Institution>
        <Line />
        <Course>Origamid</Course>
        <CourseTime>(Setembro - 2019)</CourseTime>
      </Educations>

      <Educations>
        <Institution>Python 3 COMPLETO - Do iniciante ao avançado!</Institution>
        <Line />
        <Course>Udemy Brasil</Course>
        <CourseTime>(Junho - 2019)</CourseTime>
      </Educations>

      <Educations>
        <Institution>WordPress Como CMS</Institution>
        <Line />
        <Course>Origamid</Course>
        <CourseTime>(Junho - 2019)</CourseTime>
      </Educations>

      <Educations>
        <Institution>Web Design Completo</Institution>
        <Line />
        <Course>Origamid</Course>
        <CourseTime>(Maio - 2019)</CourseTime>
      </Educations>
      <Margin />
    </Container>
  );
};

export default Education;
