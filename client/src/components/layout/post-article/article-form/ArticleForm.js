import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postArticle } from '../../../../redux/actions/article';
import { setModal } from '../../../../redux/actions/modal';

import Input from '../../../elements/input/Input';

import '../../../auth/Form.css'
import './ArticleForm.css';
import 'react-quill/dist/quill.snow.css';

const ArticleForm = ({ topicType, topicId, postArticle }) => {
   const [formData, setFormData] = useState({
      title: '',
      originalContent: '',
      richLinks: [],
   })
   const { title, originalContent, richLinks } = formData;

   const handleTitleChange = (e) => {
      e.preventDefault();
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   const handleEditorChange = (value) => {
      setFormData({ ...formData, originalContent: value })
   }

   const [article, setArticle] = useState({
      type: topicType,
      topicId
   })

   useEffect(() => {
      setArticle({ type: topicType, topicId, ...formData });
   }, [topicType, formData])

   const onSubmit = (e, article) => {
      e.preventDefault();
      console.log(article)
      // postArticle(article);
   }

   // A l'envoi, 
   // - sanitize
   // - annuler selected topic et 
   // - passer topic à inProgress
   // - vider le LS de topicId


   return (
      <section className='form-container'>
         <div className='form-wrapper topic-form-container'>
            <form className='form' onSubmit={e => onSubmit(e)} >
               <Input
                  className='input-form'
                  required
                  label='Le titre de ton article'
                  type='text'
                  name='title'
                  placeholder='Le titre de ton article *'
                  value={title}
                  onChange={(e) => handleTitleChange(e)}
                  minLength={2}
                  maxLength={150}
               />
               <ReactQuill
                  placeholder='Rédige ici :)'
                  theme='snow'
                  value={originalContent}
                  onChange={(content) => handleEditorChange(content)}
               />
               <Input
                  onlyText
                  type='submit'
                  value="Zou, j'envoie !"
                  className='btn-form'
               />
            </form>
         </div>
      </section>
   )
}

ArticleForm.propTypes = {
   topicType: PropTypes.string.isRequired,
   topicId: PropTypes.string.isRequired,
};

export default connect(null, { postArticle })(ArticleForm);
