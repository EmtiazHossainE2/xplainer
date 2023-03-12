import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'


export const getCourseNavigation = ({courseName}) => {

    const filterChapters = ['index.md', 'assets', '.DS_Store'];

    // Get the list of all modules 
  const courseNav = fs.readdirSync(path.join(courseName));
  const courseNavigationData = courseNav.filter(item => !filterChapters.includes(item))
  const courseNavItems = {};

  courseNavigationData.map((filename) => {

     // check sub folder
     if(!filename.includes('.md')){
      const folderName = filename;
      const nestedCourseNav = fs.readdirSync(path.join(courseName, folderName));

      // create subChapter folder for Higher order chapter
      const {slug : folderIndexSlug, frontmatter : folderIndexData} = readFileData(`${folderName}.md`, {courseName});
      courseNavItems[folderIndexSlug] = {slug : folderIndexSlug, frontmatter : folderIndexData, chapterMetaData : {slug : folderIndexSlug, ...folderIndexData}, subChapters : []};

      // get data of subchapter and push in the chapter node of subChapter
      nestedCourseNav.map((nestedChapterFileName) => {
         const {slug, frontmatter} = readFileData(nestedChapterFileName, {hasChild: true, folderName, courseName});
         courseNavItems[folderIndexSlug]['subChapters'].push({slug, frontmatter, chapterMetaData : {slug, ...frontmatter}});
      })
      
    }else{
      const {slug, frontmatter} = readFileData(filename, {courseName});
      if(!courseNavItems[slug]){
        courseNavItems[slug] = {slug, frontmatter, chapterMetaData : {slug, ...frontmatter}};
      }
    }
  })

  return courseNavItems;

}

const readFileData = (filename, metaData) => {
    const childfolderName = metaData?.folderName || ''; 
    const courseName = metaData?.courseName;
    const slug = filename.replace('.md', '')
    const markDownMetaData = fs.readFileSync(
     path.join(courseName, childfolderName, filename),
     'utf-8'
   )
   const { data: frontmatter } = matter(markDownMetaData);
   return {slug, frontmatter };
 }